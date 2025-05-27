<template>
	<div
		class="header text-white py-4 px-8 flex items-center justify-between container mx-auto mt-5"
	>
		<div class="title_status flex items-center gap-3">
			<h2 class="text-4xl font-bold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">Task APP</h2>
			<span
				class="inline-flex items-center justify-center rounded-full bg-gray-700 px-2.5 py-0.5 text-white flex gap-1"
			>
				<Icon name="material-symbols:wifi" class="text-[.7em]" />

				<p class="text-[.7em] whitespace-nowrap">Online</p>
			</span>
		</div>

		<ul>
			<li>
				<NuxtLink
					to="/about"
					class="text-white hover:text-gray-300 text-sm font-bold"
					>About</NuxtLink
				>
			</li>
		</ul>
	</div>
</template>