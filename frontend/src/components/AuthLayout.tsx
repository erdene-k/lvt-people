import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";



type LoaderData = {
    userPromise: any;
}
export const AuthLayout = () => {
    const outlet = useOutlet();
    const { userPromise } = useLoaderData() as LoaderData;
    return (
        <Suspense >
            <Await
                resolve={userPromise}
                errorElement={<h1>Something went wrong!</h1>}
                children={(user) => (
                    <AuthProvider userData={user}>{outlet}</AuthProvider>
                )}
            />
        </Suspense>
    );
};
