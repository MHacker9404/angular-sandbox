//  autobind decorator
function autobind(_: any, __: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;
    const newDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = method.bind(this);
            return boundFn;
        },
    };
}
