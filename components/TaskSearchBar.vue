<template>
	<section
		class="search new_task border border-gray-400 py-4 px-8 w-full flex items-center justify-between rounded-lg flex gap-5"
	>
		<div class="w-full">
			<label
				for="default-search"
				class="mb-2 text-sm font-medium text-gray-400 sr-only dark:text-white"
				>Search</label
			>
			<div class="relative">
				<div
					class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
				>
					<svg
						class="w-4 h-4 text-gray-200"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					:value="search"
					@input="$emit('update:search', $event.target.value)"
					autocomplete="off"
					class="block w-full p-2 ps-10 text-sm text-gray-300 border border-gray-400 rounded-lg placeholder:text-gray-400 focus:border-gray-400 focus:outline-gray-400"
					placeholder="Buscar tarea..."
				/>
			</div>
		</div>
		<button
			class="bg-white text-gray-800 rounded-lg px-4 py-2 ml-auto flex items-center justify-center gap-3 hover:bg-gray-200 hover:cursor-pointer sm:w-43 text-sm"
			@click="$emit('open-modal')"
		>
			<Icon name="material-symbols:add" class="text-[1.2em]" />
			<span class="hidden sm:block">Nueva Tarea</span>
		</button>
	</section>
</template>

<script setup>
const props = defineProps(["search"]);
const emit = defineEmits(["update:search", "open-modal"]);
</script>

