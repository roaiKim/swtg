/* eslint-disable func-names */
import { app } from "./app";
import { loadingAction } from "./reducer";

export function createActionHandlerDecorator(interceptor) {
    return (target, propertyKey, descriptor) => {
        const fn = descriptor.value;
        // eslint-disable-next-line no-param-reassign
        descriptor.value = function (...args) {
            const rootState = app.store.getState();
            interceptor(fn.bind(this, ...args), rootState);
        };
        return descriptor;
    };
}
export function Loading(identifier = "global") {
    return createActionHandlerDecorator(async (handler) => {
        try {
            app.store.dispatch(loadingAction(true, identifier));
            await handler();
        } finally {
            app.store.dispatch(loadingAction(false, identifier));
        }
    });
}
export function Lifecycle() {
    return (target, propertyKey, descriptor) => {
        // eslint-disable-next-line no-param-reassign
        descriptor.value.isLifecycle = true;
        return descriptor;
    };
}
