import { EntityState } from '@ngrx/entity';

import { castTo } from '../common/cast-to.function';
import { forNext } from '../common/for-next.function';
import { ChildDefinition } from '../types/child-definition.interface';
import { SmartNgRXRowBase } from '../types/smart-ngrx-row-base.interface';
import { ArrayProxy } from './array-proxy.class';

/**
 * wraps the array in a proxy so we can return a row for the ID
 *
 * @param parentEntity the entity that holds the parent rows
 * @param parentFieldName the field name that holds the child ids
 * @param child the child entity
 * @param childDefinition the child definition (used by the ArrayProxy)
 */
export function convertChildrenToArrayProxy<
  P extends SmartNgRXRowBase,
  C extends SmartNgRXRowBase,
>(
  parentEntity: EntityState<P>,
  parentFieldName: keyof P,
  child: EntityState<C>,
  childDefinition: ChildDefinition<P, C>,
): void {
  forNext(parentEntity.ids as string[], (w) => {
    const entity: P = { ...parentEntity.entities[w] } as P;
    parentEntity.entities[w] = entity;
    const childArray = entity[parentFieldName] as ArrayProxy<P, C> | string[];

    const arrayProxy = new ArrayProxy<P, C>(childArray, child, childDefinition);
    arrayProxy.init();
    castTo<Record<string, unknown>>(entity)[parentFieldName as string] =
      arrayProxy;
  });
}
