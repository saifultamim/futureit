"use client";

import { useState } from "react";
import { StartSupport } from "./StartSupport";
import { SupportLogs } from "./SupportLogs";
import { Timeline } from "./Timeline";



export const SupportManagement =  ({links,logs,categories}) => {
    const [isAction,setIsAction] = useState(true);
    return (
        <main>
            <StartSupport getLinks={links} />
            <SupportLogs logs={logs} /> 
            <Timeline setIsAction={setIsAction} isAction={isAction} categories={categories} />
           {/*  <Posts setIsAction={setIsAction} isAction={isAction} />  */}
        </main>
    );
};

SupportManagement.displayName = "SupportManagement";
