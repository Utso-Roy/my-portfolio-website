import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Learning from "../Learning/Learning";
import Blogs from "../Blogs/Blogs";
import Contacts from "../Contacts/Contacts";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      {
            index: true,
        Component: Home,
      },

      {
        path: "projects",
        Component: Projects,
      },
      {
        path: "learning",
        Component: Learning,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "contacts",
        Component: Contacts,
      },
    ],
  },
]);
