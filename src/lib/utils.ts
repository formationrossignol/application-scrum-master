import { clsx } from "clsx";

export const cn = (...v: Array<string | false | undefined>) => clsx(v);

export const slugify = (v: string) => v.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
