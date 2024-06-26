import React, { useEffect } from "react";

import { Layout } from 'antd';

import {
    getOptions,
    updateOptins
} from "../Utils/Data";

const { Sider } = Layout;

import * as Types from "../Utils/actionType";

import Settings from "./Settings";

import NeedSupport from "./NeedSupport";

import MainHeader from "./MainHeader";

import { useStateValue } from "../Utils/StateProvider";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";

function App() {

    const [ stateValue, dispatch ] = useStateValue();
    const getTheOptins = async () => {
        const response = await getOptions();
        const preparedData =  await JSON.parse( response.data );
        await dispatch({
            type: Types.UPDATE_OPTIONS,
            options: {
                ...preparedData,
                isLoading: false,
            }
        });
        console.log( 'getOptions' );
    }

    const handleUpdateOption = async () => {
       const response = await updateOptins( stateValue.options );
       if( 200 === parseInt( response.status ) ){
           await getTheOptins();
       }
       console.log( 'handleUpdateOption' );
    }


    const handleSave = () => {
        switch ( stateValue.saveType ) {
            case Types.UPDATE_OPTIONS:
                    handleUpdateOption();
                break;
            default:
        }
    }

    useEffect(() => {
        handleSave();
    }, [ stateValue.saveType ] );
    
    useEffect(() => {
        getTheOptins();
    }, [] );

    return (
            <Layout className="tttme-App" style={{
                padding: '10px',
                background: '#fff',
                borderRadius: '5px',
                boxShadow: '0 4px 40px rgb(0 0 0 / 5%)',
                height: 'calc( 100vh - 110px )',
            }}>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<Settings/>}/>
                        <Route path="/support" element={<NeedSupport/>}/>
                        <Route path="*" element={<Navigate to="/" replace/>}/>
                    </Routes>
                </HashRouter>
            </Layout>
    );
}

export default App