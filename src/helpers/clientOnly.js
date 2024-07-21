import { h, nextTick, onBeforeMount, shallowRef, defineComponent } from "vue"

export function clienOnly(load) {
	const componentWrapper = defineComponent({
		inheritAttrs: false,
		setup(_, { attrs, slots }) {
			const componentLoaded = shallowRef(null)
			const error = shallowRef(null)

			onBeforeMount(async () => {
				try {
					const ret = await load()
					componentLoaded.value = 'default' in ret ? ret.default : ret
				} catch (err) {
					console.error('Error while loading clientOnly() component:', e)

					nextTick(() => {
						error.value = err
					})
				}
			})

			return () => {
				if (componentLoaded.value) {
					return h(componentLoaded.value, attrs, slots)
				}
				if (slots['client-only-fallback']) {
					return slots['client-only-fallback']({ error: error.value, attrs })
				}
				if (slots['fallback']) {
          return slots['fallback']({ error: error.value, attrs })
        }
			}
		},
		slots: {}
	})
	return componentWrapper
}