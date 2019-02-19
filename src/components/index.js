import Aurora from './Aurora.vue'
import Smoke from './Smoke.vue'
import Coalesce from './Coalesce.vue'
import Pipeline from './Pipeline.vue'
import Shift from './Shift.vue'


export function install(Vue, settings) {
    [Aurora, Smoke, Coalesce, Pipeline, Shift].forEach(comp => {
        Vue.component(
            comp.name,
            comp
        )
    })

}

export {
    Aurora,
    Smoke,
    Coalesce,
    Pipeline,
    Shift
}

export default install