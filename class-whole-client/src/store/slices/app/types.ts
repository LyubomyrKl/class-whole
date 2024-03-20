export interface IAppState {
    globalError: IError | null;
    errors: IError[];
}

export interface IRejectValue {
    rejectValue: IError;
}

export interface IRequestOptions {
    // axios options
    onUploadProgress: (progressEvent: any) => void;
}


export interface IError {
    status: string | number;
    title: string;
    subtitle?: string;
}

export interface IErrorBlockProps {
    status: number | string;
    title: string;
    subtitle?: string;
}