/**
 * 动态注册组件
 * @param {import("vue").DefineComponent} defineComponent
 * @param {import("vue").Component[]} components
 */
export const useDynamicComponents = (
	defineComponent,
	components
) => {
	components.forEach(component => {
		const { displayName } = component || {}
		if (displayName) {
			defineComponent.components[displayName] = component
		}
	})
}
