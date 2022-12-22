import React from "react";
import classNames from "classnames";

interface Props {
  value: string;
}

const StatusPill =({value}: Props)=>{
    const level = value ? value.toLowerCase() : "unknown";
  
      return(
          <span
        className={classNames(
          "px-3 py-1 capitalize font-normal text-xs rounded-md",
          
          level.startsWith("pending") ? " bg-status-bg_p text-status-text_p" : null,
          
          level.startsWith("completed") ? " bg-status-bg_c text-status-text_c" : null,
        )}
      >
        {level}
      </span>
      )
  }
  
  export {StatusPill};