<template>
	<section
		:class="
			tasks.length == 0
				? 'rounded-lg border text-card-foreground shadow-sm border-dashed border-2 border-gray-500 flex items-center justify-between space-x-2 bg-black/10'
				: 'rounded-lg text-card-foreground shadow-sm borborder-gray-700 flex items-center justify-between space-x-2'
		"
	>
		<div
			class="p-4 flex flex-col items-center justify-center space-x-2 w-full"
			v-if="tasks.length === 0"
		>
			<span class="text-[8em]">📝</span>
			<h2 class="text-[1.3em] font-bold">No hay tareas</h2>
			<p class="text-[1em] text-gray-500 mt-3">
				Comienza agregando tu primera tarea
			</p>
		</div>
		<div
			v-else
			class="rounded-lg text-card-foreground shadow-sm transition-all hover:shadow-lg w-full flex flex-col gap-4"
		>
			<div
				class="card w-full rounded-lg py-4 px-5 border-1 border-gray-400 flex flex-row gap-2 transition-all overflow-hidden overflow-x-auto"
				v-for="(task, idx) in tasks"
				:key="idx"
				:class="statusClass(task.status)"
			>
				<!-- ...contenido de la tarea... -->
				<slot :task="task" :idx="idx"></slot>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(["tasks", "statusClass"]);
</script>
