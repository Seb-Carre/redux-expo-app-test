import { createAction } from "@reduxjs/toolkit";

export const apiCall = createAction("apiCall");

export const apiFailed = createAction("apiRequestFailed");
