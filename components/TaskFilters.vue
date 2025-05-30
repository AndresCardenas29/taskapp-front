<template>
	<section
		class="search new_task border border-gray-400 py-4 px-8 w-full flex items-center justify-start rounded-lg flex gap-2 overflow-hidden overflow-x-auto"
	>
		<button
			v-for="status in statuses"
			:key="status.value"
			type="button"
			:class="
				filterSelected === status.value
					? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
					: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
			"
			@click="$emit('update:filter', status.value)"
		>
			<Icon v-if="status.icon" :name="status.icon" class="text-[1.6em]" />
			<span>{{ status.label }}</span>
			<span
				class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-0 bg-gray-700 text-white"
			>
				{{ filterCounts[status.value] }}
			</span>
		</button>
	</section>
</template>

<script setup>
const props = defineProps(["filterSelected", "filterCounts"]);
const emit = defineEmits(["update:filter"]);
const statuses = [
	{ value: "all", label: "📋 Todas" },
	{ value: "created", label: "Creadas", icon: "streamline-emojis:file-folder" },
	{
		value: "doing",
		label: "En Progreso",
		icon: "streamline-emojis:hourglass-not-done-2",
	},
	{
		value: "completed",
		label: "Completadas",
		icon: "fluent-color:checkmark-circle-20",
	},
];
</script>
