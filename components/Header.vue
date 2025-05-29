<template>
	<div
		class="header text-white py-4 px-8 flex items-center justify-between container max-w-6xl mx-auto mt-5"
	>
		<div class="title_status flex items-center gap-3">
			<h2
				class="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent"
			>
				Task APP
			</h2>
			<span
				class="inline-flex items-center justify-center rounded-full bg-gray-700 px-2.5 py-0.5 text-white flex gap-1"
			>
				<Icon name="material-symbols:wifi" class="text-[.7em]" />

				<p v-if="serverStatusH" class="text-[.7em] whitespace-nowrap">Online</p>
				<p v-else class="text-[.7em] whitespace-nowrap">Offline</p>
			</span>
		</div>

		<ul>
			<li>
				<NuxtLink
					to="/about"
					class="flex flex-row items-center gap-4 hover:bg-gray-200/20 px-3 py-1 rounded-sm hover:cursor-pointer transition-all"
					>About</NuxtLink
				>
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({
	serverStatusH: Boolean,
});
</script>
