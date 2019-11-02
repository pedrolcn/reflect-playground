"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function Controller(basePath, middlewares = []) {
    return (target) => {
        const previousMetadata = Reflect.getMetadata(constants_1.CONTROLLER_ROUTE_METADATA_STORAGE, target);
        const previousMiddlewares = (previousMetadata || {}).middlewares || [];
        Reflect.defineMetadata(constants_1.CONTROLLER_ROUTE_METADATA_STORAGE, { basePath, middlewares: previousMiddlewares.concat(middlewares) }, target);
    };
}
exports.Controller = Controller;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kZWNvcmF0b3JzL0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBaUU7QUFPakUsU0FBZ0IsVUFBVSxDQUFDLFFBQWdCLEVBQUUsY0FBMEIsRUFBRTtJQUN2RSxPQUFPLENBQXFCLE1BQVMsRUFBRSxFQUFFO1FBQ3ZDLE1BQU0sZ0JBQWdCLEdBQXdDLE9BQU8sQ0FBQyxXQUFXLENBQy9FLDZDQUFpQyxFQUNqQyxNQUFNLENBQ1AsQ0FBQztRQUVGLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO1FBRXZFLE9BQU8sQ0FBQyxjQUFjLENBQ3BCLDZDQUFpQyxFQUNqQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQ2xFLE1BQU0sQ0FDUCxDQUFDO0lBQ0osQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQWZELGdDQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09OVFJPTExFUl9ST1VURV9NRVRBREFUQV9TVE9SQUdFIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sbGVyUm91dGVNZXRhZGF0YSB7XG4gIGJhc2VQYXRoOiBzdHJpbmc7XG4gIG1pZGRsZXdhcmVzOiBGdW5jdGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29udHJvbGxlcihiYXNlUGF0aDogc3RyaW5nLCBtaWRkbGV3YXJlczogRnVuY3Rpb25bXSA9IFtdKTogQ2xhc3NEZWNvcmF0b3Ige1xuICByZXR1cm4gPFQgZXh0ZW5kcyBGdW5jdGlvbj4odGFyZ2V0OiBUKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNNZXRhZGF0YTogQ29udHJvbGxlclJvdXRlTWV0YWRhdGEgfCB1bmRlZmluZWQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFxuICAgICAgQ09OVFJPTExFUl9ST1VURV9NRVRBREFUQV9TVE9SQUdFLFxuICAgICAgdGFyZ2V0XG4gICAgKTtcblxuICAgIGNvbnN0IHByZXZpb3VzTWlkZGxld2FyZXMgPSAocHJldmlvdXNNZXRhZGF0YSB8fCB7fSkubWlkZGxld2FyZXMgfHwgW107XG4gICAgXG4gICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcbiAgICAgIENPTlRST0xMRVJfUk9VVEVfTUVUQURBVEFfU1RPUkFHRSxcbiAgICAgIHsgYmFzZVBhdGgsIG1pZGRsZXdhcmVzOiBwcmV2aW91c01pZGRsZXdhcmVzLmNvbmNhdChtaWRkbGV3YXJlcykgfSxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH1cbn1cbiJdfQ==