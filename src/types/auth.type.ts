// export interface IUserRegister {
//     name: string;
//     email: string;
//     password: string;
//     phone: string;
//     address: string;
//     role: "USER" | "AGENT" | "ADMIN";
//     nid: number;
// }

// export interface IUserLogin {
//     email: string;
//     password: string;
// }

// export interface IUserInfo {
//     _id: string;
//     name: string;
//     email: string;
//     phone: string;
//     address: string;
//     role: "USER" | "AGENT" | "ADMIN";
//     nid: number;
//     isAgentApproved?: boolean;
//     photo?: string;
//     createdAt?: string;
//     updatedAt?: string;
// }

// export interface IApiResponse<T = any> {
//     success: boolean;
//     message: string;
//     data?: T;
//     errorSources?: Array<{ path?: string; message: string }>;
//     err?: { statusCode?: number; message?: string; name?: string };
//     stack?: string;
// }