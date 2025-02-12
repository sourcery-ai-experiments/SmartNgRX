import { ParentInfo } from '../actions/parent-info.interface';
import { removeIdFromParents } from '../actions/remove-id-from-parents.function';
import { forNext } from '../common/for-next.function';
import { childDefinitionRegistry } from '../registrations/child-definition.registry';

/**
 * Delete the feature/entity/ids from the store
 *
 * @param feature The feature the entity is in.
 * @param entity The entity to delete.
 * @param ids The ids of the rows that need to be deleted.
 */
export function deleteEntity(feature: string, entity: string, ids: string[]) {
  const childDefinitions = childDefinitionRegistry.getChildDefinition(
    feature,
    entity,
  );
  const parentInfo: ParentInfo[] = [];
  forNext(childDefinitions, (childDefinition) => {
    forNext(ids, (id) => {
      // This doesn't make a database call, it just updates the store.
      removeIdFromParents(childDefinition, id, parentInfo);
    });
  });
}
