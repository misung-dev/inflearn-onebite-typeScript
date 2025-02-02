// infer

type Func = () => string;

type ReturnType<T> = T extends () => string ? string : never;
