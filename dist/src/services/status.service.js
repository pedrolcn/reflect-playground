"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Package = require("../../package.json");
class StatusService {
    constructor(options) {
        this.options = options;
        this.startupTime = options.startupTime || Date.now();
    }
    static initialize(options) {
        return this.instance = new StatusService(options);
    }
    static getInstance() {
        if (!this.instance) {
            throw new Error("Status service is not initialized yet");
        }
        return this.instance;
    }
    getStatusInfo() {
        return {
            name: Package.name,
            version: Package.version,
            uptime: Date.now() - this.startupTime,
        };
    }
}
exports.StatusService = StatusService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvc3RhdHVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBOEM7QUFNOUMsTUFBYSxhQUFhO0lBS3hCLFlBQTZCLE9BQTZCO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBNkI7UUFDcEQsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVztRQUN2QixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDdEIsQ0FBQztJQUVNLGFBQWE7UUFDbEIsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVztTQUN0QyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBNUJELHNDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFBhY2thZ2UgZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuZXhwb3J0IGludGVyZmFjZSBTdGF0dXNTZXJ2aWNlT3B0aW9ucyB7XG4gIHN0YXJ0dXBUaW1lPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgU3RhdHVzU2VydmljZSB7XG4gIHByb3RlY3RlZCBzdGF0aWMgaW5zdGFuY2U/OiBTdGF0dXNTZXJ2aWNlO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBzdGFydHVwVGltZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogU3RhdHVzU2VydmljZU9wdGlvbnMpIHtcbiAgICB0aGlzLnN0YXJ0dXBUaW1lID0gb3B0aW9ucy5zdGFydHVwVGltZSB8fCBEYXRlLm5vdygpOyBcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZShvcHRpb25zOiBTdGF0dXNTZXJ2aWNlT3B0aW9ucyk6IFN0YXR1c1NlcnZpY2Uge1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXR1c1NlcnZpY2Uob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFN0YXR1c1NlcnZpY2Uge1xuICAgIGlmKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdGF0dXMgc2VydmljZSBpcyBub3QgaW5pdGlhbGl6ZWQgeWV0XCIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlXG4gIH1cblxuICBwdWJsaWMgZ2V0U3RhdHVzSW5mbygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogUGFja2FnZS5uYW1lLFxuICAgICAgdmVyc2lvbjogUGFja2FnZS52ZXJzaW9uLFxuICAgICAgdXB0aW1lOiBEYXRlLm5vdygpIC0gdGhpcy5zdGFydHVwVGltZSxcbiAgICB9O1xuICB9XG59Il19