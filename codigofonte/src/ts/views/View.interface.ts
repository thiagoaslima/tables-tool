export interface ViewConstructor {
    new (
        element: HTMLElement,
        options?: any
    ): View
}

export interface View {
    update(model: any): HTMLElement
}
