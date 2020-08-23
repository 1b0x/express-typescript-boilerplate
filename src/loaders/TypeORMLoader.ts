import { MicroframeworkSettings } from "microframework";
import { createConnection } from "typeorm";

export default async function TypeORMLoader(options?: MicroframeworkSettings) {
    const connection = await createConnection();
    options?.onShutdown(() => connection.close());
}
