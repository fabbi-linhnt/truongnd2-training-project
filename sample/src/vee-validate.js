import * as rules from 'vee-validate/dist/rules';
import { extend } from "vee-validate";

Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

// with typescript
for (let [rule, validation] of Object.entries(rules)) {
    extend(rule, {
        ...validation
    });
}
