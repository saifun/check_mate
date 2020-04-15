import axios from "axios";
import React from "react";

export const getUser = (user_id) => axios.get("/api/user/`{user_id}`");
