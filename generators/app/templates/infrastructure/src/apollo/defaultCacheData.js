<%_if(addQuickStart){ _%>
import { emptyObject } from "utils/constants";
import { yourEntityPager, yourEntityListFilter, } from "./cacheKeyFunctions"

// Here you define the default values for local apollo state (@client only values)
// https://www.apollographql.com/docs/react/local-state/local-state-management/

const yourEntityDefaultPager = {
    afterId: null,
    totalCount: 0,
    pageSize: 10,
    sortBy: "FieldName",
    direction: 1,
    page: 0
};
const yourEntityDefaultListFilter = emptyObject;

export const defaults = {
    [yourEntityPager]: yourEntityDefaultPager,
    [yourEntityListFilter]: yourEntityDefaultListFilter,
}
<%_}else{_%>
// Here you define the default values for local apollo state (@client only values)
// https://www.apollographql.com/docs/react/local-state/local-state-management/
// e.g. [yourCacheKey]: yourDefaultValue
export const defaults = {}
<%_}_%>
