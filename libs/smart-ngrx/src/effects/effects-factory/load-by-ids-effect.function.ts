import { inject, InjectionToken, NgZone } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { filter, map, mergeMap, Observable } from 'rxjs';

import { ActionService } from '../../actions/action.service';
import { ActionGroup } from '../../actions/action-group.interface';
import { actionServiceRegistry } from '../../registrations/action.service.registry';
import { SmartNgRXRowBase } from '../../types/smart-ngrx-row-base.interface';
import { bufferIdsAction } from '../buffer-ids-action.function';
import { EffectService } from '../effect-service';

function notAPreloadId(c: string): boolean {
  return !['index-', 'indexNoOp-'].some((v) => c.startsWith(v));
}

/**
 * This is the effect that loads the ids from the service.
 *
 * @param effectServiceToken the effect service token that knows how to load the ids
 * @param actions the action group for the source provided
 * @param feature the feature name this effect is being run for
 * @param entity the entity within the feature this effect is being run for
 * @returns the loadByIds effect
 */
export function loadByIdsEffect<T extends SmartNgRXRowBase>(
  effectServiceToken: InjectionToken<EffectService<T>>,
  actions: ActionGroup<T>,
  feature: string,
  entity: string,
) {
  return (
    /* istanbul ignore next -- default value, not really a condition */
    actions$ = inject(Actions),
    /* istanbul ignore next -- default value, not really a condition */
    effectService = inject(effectServiceToken),
    /* istanbul ignore next -- default value, not really a condition */
    zone: NgZone = inject(NgZone),
  ) => {
    return actions$.pipe(
      ofType(actions.loadByIds),
      bufferIdsAction(zone),
      map((ids) => ids.filter(notAPreloadId)),
      filter((ids) => ids.length > 0),
      mergeMap((ids): Observable<T[]> => {
        new ActionService(feature, entity).loadByIdsPreload(ids);
        return effectService.loadByIds(ids);
      }),
      map((rows) => {
        const service = actionServiceRegistry(feature, entity);
        service.loadByIdsSuccess(rows);
      }),
    );
  };
}
