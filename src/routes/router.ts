import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([

    {
        path:"/",
        children : [
            {
                index : true,
                lazy : {
                    Component : async () => {
                        const component = await import("../pages/auth/signup/signup.tsx")

                        return component.default
                    }
                }
            },

            {
                path : "SignIn",
                lazy : {
                    Component : async () => {
                        const component = await import("../pages/auth/signin/SignIn.tsx")
                        return component.default
                    }
                }
            },

        ]
    },
    {
        path: "/movie",
        children: [
            {
                index:true,
                lazy:{
                    Component : async () => {
                        const component = await import("../pages/movies/Movies.tsx")
                        return component.default
                    }
                }
            },
            {
                path:"add-movies",
                lazy:{
                    Component : async () => {
                        const Component = await import("../pages/movies/AddMovie.tsx")
                        return Component.default
                    }
                }
            },
            {
                path:"edit-movie/:id",
                lazy:{
                    Component : async () => {
                        const Component = await import("../pages/movies/EditMovie.tsx")
                        return Component.default
                    }
                }
            }
        ]
    }
])

export default router