/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface Cv2AmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface Cv2AmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface Cv2AmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
}
export interface Cv2AmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv2AmbulanceWlEditorElement;
}
export interface Cv2AmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLCv2AmbulanceWlListElement;
}
declare global {
    interface HTMLCv2AmbulanceWlAppElement extends Components.Cv2AmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLCv2AmbulanceWlAppElement: {
        prototype: HTMLCv2AmbulanceWlAppElement;
        new (): HTMLCv2AmbulanceWlAppElement;
    };
    interface HTMLCv2AmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLCv2AmbulanceWlEditorElement extends Components.Cv2AmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv2AmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv2AmbulanceWlEditorElement, ev: Cv2AmbulanceWlEditorCustomEvent<HTMLCv2AmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv2AmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLCv2AmbulanceWlEditorElement, ev: Cv2AmbulanceWlEditorCustomEvent<HTMLCv2AmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv2AmbulanceWlEditorElement: {
        prototype: HTMLCv2AmbulanceWlEditorElement;
        new (): HTMLCv2AmbulanceWlEditorElement;
    };
    interface HTMLCv2AmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLCv2AmbulanceWlListElement extends Components.Cv2AmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLCv2AmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv2AmbulanceWlListElement, ev: Cv2AmbulanceWlListCustomEvent<HTMLCv2AmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLCv2AmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLCv2AmbulanceWlListElement, ev: Cv2AmbulanceWlListCustomEvent<HTMLCv2AmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLCv2AmbulanceWlListElement: {
        prototype: HTMLCv2AmbulanceWlListElement;
        new (): HTMLCv2AmbulanceWlListElement;
    };
    interface HTMLElementTagNameMap {
        "cv2-ambulance-wl-app": HTMLCv2AmbulanceWlAppElement;
        "cv2-ambulance-wl-editor": HTMLCv2AmbulanceWlEditorElement;
        "cv2-ambulance-wl-list": HTMLCv2AmbulanceWlListElement;
    }
}
declare namespace LocalJSX {
    interface Cv2AmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface Cv2AmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: Cv2AmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface Cv2AmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: Cv2AmbulanceWlListCustomEvent<string>) => void;
    }
    interface IntrinsicElements {
        "cv2-ambulance-wl-app": Cv2AmbulanceWlApp;
        "cv2-ambulance-wl-editor": Cv2AmbulanceWlEditor;
        "cv2-ambulance-wl-list": Cv2AmbulanceWlList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cv2-ambulance-wl-app": LocalJSX.Cv2AmbulanceWlApp & JSXBase.HTMLAttributes<HTMLCv2AmbulanceWlAppElement>;
            "cv2-ambulance-wl-editor": LocalJSX.Cv2AmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLCv2AmbulanceWlEditorElement>;
            "cv2-ambulance-wl-list": LocalJSX.Cv2AmbulanceWlList & JSXBase.HTMLAttributes<HTMLCv2AmbulanceWlListElement>;
        }
    }
}
