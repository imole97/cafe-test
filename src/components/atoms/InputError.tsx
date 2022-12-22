import { WithClassname } from "@utils/types/types";
import React, { ReactElement } from "react";

type ErrorProps =
  | {
      text: string;
      ErrorRender?: never;
    }
  | {
      text?: never;
      ErrorRender: (props: any) => ReactElement;
    };

type Props = ErrorProps & WithClassname;

const InputError = ({ className = "", text = "", ErrorRender }: Props) => {
  return ErrorRender ? (
    <ErrorRender />
  ) : (
    <small className={`text-xs text-status-err ${className}`}>{text}</small>
  );
};

export default InputError;
