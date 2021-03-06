/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DagreLayout } from './dagre';
import { DagreClusterLayout } from './dagreCluster';
import { DagreNodesOnlyLayout } from './dagreNodesOnly';
import { D3ForceDirectedLayout } from './d3ForceDirected';
/** @type {?} */
const layouts = {
    dagre: DagreLayout,
    dagreCluster: DagreClusterLayout,
    dagreNodesOnly: DagreNodesOnlyLayout,
    d3: D3ForceDirectedLayout
};
export class LayoutService {
    /**
     * @param {?} name
     * @return {?}
     */
    getLayout(name) {
        if (layouts[name]) {
            return new layouts[name]();
        }
        else {
            throw new Error(`Unknown layout type '${name}'`);
        }
    }
}
LayoutService.decorators = [
    { type: Injectable },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3dpbWxhbmUvbmd4LWdyYXBoLyIsInNvdXJjZXMiOlsibGliL2dyYXBoL2xheW91dHMvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUN0QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFcEQsT0FBTyxHQUFHO0lBQ2QsS0FBSyxFQUFFLFdBQVc7SUFDbEIsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxjQUFjLEVBQUUsb0JBQW9CO0lBQ3BDLEVBQUUsRUFBRSxxQkFBcUI7Q0FDMUI7QUFHRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsU0FBUyxDQUFDLElBQVk7UUFDcEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQzVCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7O1lBUkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2xheW91dC5tb2RlbCc7XHJcbmltcG9ydCB7IERhZ3JlTGF5b3V0IH0gZnJvbSAnLi9kYWdyZSc7XHJcbmltcG9ydCB7IERhZ3JlQ2x1c3RlckxheW91dCB9IGZyb20gJy4vZGFncmVDbHVzdGVyJztcclxuaW1wb3J0IHsgRGFncmVOb2Rlc09ubHlMYXlvdXQgfSBmcm9tICcuL2RhZ3JlTm9kZXNPbmx5JztcclxuaW1wb3J0IHsgRDNGb3JjZURpcmVjdGVkTGF5b3V0IH0gZnJvbSAnLi9kM0ZvcmNlRGlyZWN0ZWQnO1xyXG5cclxuY29uc3QgbGF5b3V0cyA9IHtcclxuICBkYWdyZTogRGFncmVMYXlvdXQsXHJcbiAgZGFncmVDbHVzdGVyOiBEYWdyZUNsdXN0ZXJMYXlvdXQsXHJcbiAgZGFncmVOb2Rlc09ubHk6IERhZ3JlTm9kZXNPbmx5TGF5b3V0LFxyXG4gIGQzOiBEM0ZvcmNlRGlyZWN0ZWRMYXlvdXRcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExheW91dFNlcnZpY2Uge1xyXG4gIGdldExheW91dChuYW1lOiBzdHJpbmcpOiBMYXlvdXQge1xyXG4gICAgaWYgKGxheW91dHNbbmFtZV0pIHtcclxuICAgICAgcmV0dXJuIG5ldyBsYXlvdXRzW25hbWVdKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbGF5b3V0IHR5cGUgJyR7bmFtZX0nYCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==