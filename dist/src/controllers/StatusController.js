"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controller_1 = require("../decorators/Controller");
const Route_1 = require("../decorators/Route");
const services_1 = require("../services");
const startupTimestamp = Date.now();
function specialLoggerMiddleware(req, res, next) {
    console.log("this is a very special request indeed");
    next();
}
let StatusController = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    redirectRootToStatus(req, res) {
        res.redirect('/status');
    }
    status(req, res) {
        const statusInfo = this.statusService.getStatusInfo();
        res.status(200)
            .set("Content-Type", "application/json")
            .send(statusInfo);
    }
    echo(req, res) {
        res.json(req.body);
    }
};
__decorate([
    Route_1.Get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "redirectRootToStatus", null);
__decorate([
    Route_1.Get('/status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "status", null);
__decorate([
    Route_1.Post('/echo', [specialLoggerMiddleware]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StatusController.prototype, "echo", null);
StatusController = __decorate([
    Controller_1.Controller('/'),
    __metadata("design:paramtypes", [services_1.StatusService])
], StatusController);
exports.StatusController = StatusController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9TdGF0dXNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsbUNBQW1DO0FBQ25DLHlEQUFzRDtBQUN0RCwrQ0FBZ0Q7QUFDaEQsMENBQTRDO0FBRzVDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXBDLFNBQVMsdUJBQXVCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO0lBQ3RHLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUNyRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUM7QUFHRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUFzQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFHLENBQUM7SUFHL0Msb0JBQW9CLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUNyRSxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFHTSxNQUFNLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtRQUN2RCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXRELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1osR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQzthQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUdNLElBQUksQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFBO0FBakJDO0lBREMsV0FBRyxDQUFDLEdBQUcsQ0FBQzs7Ozs0REFHUjtBQUdEO0lBREMsV0FBRyxDQUFDLFNBQVMsQ0FBQzs7Ozs4Q0FPZDtBQUdEO0lBREMsWUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUM7Ozs7NENBR3hDO0FBcEJVLGdCQUFnQjtJQUQ1Qix1QkFBVSxDQUFDLEdBQUcsQ0FBQztxQ0FFdUIsd0JBQWE7R0FEdkMsZ0JBQWdCLENBcUI1QjtBQXJCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBQYWNrYWdlIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvQ29udHJvbGxlclwiO1xuaW1wb3J0IHsgR2V0LCBQb3N0IH0gZnJvbSBcIi4uL2RlY29yYXRvcnMvUm91dGVcIjtcbmltcG9ydCB7IFN0YXR1c1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IHN0YXJ0dXBUaW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG5mdW5jdGlvbiBzcGVjaWFsTG9nZ2VyTWlkZGxld2FyZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlLCBuZXh0OiBleHByZXNzLk5leHRGdW5jdGlvbikge1xuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgYSB2ZXJ5IHNwZWNpYWwgcmVxdWVzdCBpbmRlZWRcIik7XG4gIG5leHQoKTtcbn1cblxuQENvbnRyb2xsZXIoJy8nKVxuZXhwb3J0IGNsYXNzIFN0YXR1c0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhdHVzU2VydmljZTogU3RhdHVzU2VydmljZSkge31cblxuICBAR2V0KCcvJylcbiAgcHVibGljIHJlZGlyZWN0Um9vdFRvU3RhdHVzKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICByZXMucmVkaXJlY3QoJy9zdGF0dXMnKTtcbiAgfVxuXG4gIEBHZXQoJy9zdGF0dXMnKVxuICBwdWJsaWMgc3RhdHVzKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpIHtcbiAgICBjb25zdCBzdGF0dXNJbmZvID0gdGhpcy5zdGF0dXNTZXJ2aWNlLmdldFN0YXR1c0luZm8oKTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKVxuICAgICAgLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIilcbiAgICAgIC5zZW5kKHN0YXR1c0luZm8pO1xuICB9XG5cbiAgQFBvc3QoJy9lY2hvJywgW3NwZWNpYWxMb2dnZXJNaWRkbGV3YXJlXSlcbiAgcHVibGljIGVjaG8ocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xuICAgIHJlcy5qc29uKHJlcS5ib2R5KTtcbiAgfVxufSJdfQ==