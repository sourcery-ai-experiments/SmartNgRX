import { castTo } from "../common/cast-to.function";
import { forNext } from "../common/for-next.function";
import { ArrayProxy } from "../selector/array-proxy.class";
import { VirtualArray } from "../selector/virtual-array.class";
import { SmartNgRXRowBase } from "../types/smart-ngrx-row-base.interface";

function isVirtualArray(array: unknown): array is VirtualArray<SmartNgRXRowBase> {
  return array instanceof VirtualArray;
}


/**
 * If the row has a dirty flag set, this tells the virtualArray that
 * the indexes need to be refetched.
 *
 * @param row the row to check
 */
export function forceRefetchOfVirtualIndexes<T extends SmartNgRXRowBase>(row: T) {
  if (row.isDirty !== true) {
    return;
  }
  const keys = Object.keys(row) as (keyof T)[];
  forNext(keys, (key) => {
    const arrayProxy = ((row as Record<keyof T, unknown>)[key] as ArrayProxy);
    const rawArray = castTo<VirtualArray<SmartNgRXRowBase>>(arrayProxy.rawArray);
    if (isVirtualArray(rawArray)) {
      rawArray.refetchIndexes();
    }
  });
}
