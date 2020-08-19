import React from "react";
// import { useSubscription } from "@apollo/client";

// import { USER_UPDATED_IN_IDENTITY } from "features/user/edit/subscriptions/UserUpdatedInIdentity";
// import { useToast } from 'hooks/toasts';
// import { useError } from 'hooks/errorHandling';
// import { useReactOidc } from '@axa-fr/react-oidc-context';
// import { useTranslation } from "react-i18next";

function Notifier() {
    // const { t } = useTranslation();
    // const { oidcUser } = useReactOidc();
    // const addToast = useToast();
    // const showError = useError();

    // useSubscription(USER_UPDATED_IN_IDENTITY, {
    //     skip: !oidcUser?.access_token,
    //     onSubscriptionData: ({ subscriptionData: { data, error } }) => {
    //         if (error) showError(error);

    //         const userId = oidcUser?.profile?.sub
    //         const user = data?.userChanged?.user
    //         if (user && user.id === userId) {
    //             addToast(t('UserData.UserChanged', { userName: data?.userChanged?.user?.userName }), "success");
    //         }
    //     }
    // })

    return <React.Fragment />
}

Notifier.propTypes = {};

export default Notifier;
