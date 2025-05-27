<template>
	<!-- Modal -->
	<div
		class="modal fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
		v-if="showModal"
	>
		<div
			class="form border-1 border-gray-800 rounded-lg shadow-md px-6 py-4 w-sm text-white font-medium border-b bg-[#0b0b0b]"
		>
			<div
				class="modal-head flex flex-row gap-2 item-center justify-between mt-2 mb-4"
			>
				<h2 class="modal-title font-bold">Nueva Tarea</h2>
				<button
					class="hover:bg-gray-800 flex items-center justify-center hover:cursor-pointer p-1 rounded-sm transition"
					@click="closeModal"
				>
					<Icon name="material-symbols:close" class="text-[1.5em]" />
				</button>
			</div>
			<form>
				<div class="title mb-4">
					<span>Title*:</span>
					<input
						type="text"
						id="default-search"
						class="border border-gray-700 rounded-lg shadow-md px-4 py-2 w-full text-white font-medium border-b focus:outline-none focus:ring-4 focus:ring-gray-300"
						placeholder="Titlulo de la tarea"
						v-model="newTask.title"
						autocomplete="off"
					/>
				</div>
				<div class="description mb-4">
					<span>Descripción:</span>
					<input
						type="text"
						id="default-search"
						class="border border-gray-700 rounded-lg shadow-md px-4 py-2 w-full text-white font-medium border-b focus:outline-none focus:ring-4 focus:ring-gray-300"
						placeholder="Descripción opcional"
						v-model="newTask.description"
						autocomplete="off"
					/>
				</div>
				<div class="buttons flex gap-4">
					<input
						type="submit"
						value="Crear tarea"
						class="bg-white text-black font-medium rounded-lg shadow-md px-4 py-2 w-full text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer"
						@click="createTask"
					/>
					<input
						type="button"
						value="Cancelar"
						class="bg-[#0b0b0b] text-white font-medium rounded-lg shadow-md px-4 py-2 w-2/4 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer border-1"
						@click="closeModal"
					/>
				</div>
			</form>
		</div>
	</div>
	<!-- End Modal -->
	<Header />
	<!-- min-h-screen bg-gradient-to-br from-background via-background to-muted/20 -->
	<div class="container mx-auto text-white py-4 px-8 flex flex-col gap-5">
		<section
			class="search new_task border border-gray-400 py-4 px-8 w-full flex items-center justify-between rounded-lg flex gap-5"
		>
			<form class="w-full">
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
						id="default-search"
						class="block w-full p-2 ps-10 text-sm text-gray-300 border border-gray-400 rounded-lg placeholder:text-gray-400 focus:border-gray-400 focus:outline-gray-400"
						placeholder="Buscar tarea..."
						required
					/>
				</div>
			</form>
			<button
				class="bg-white text-gray-800 rounded-lg px-4 py-2 ml-auto flex items-center justify-center gap-3 hover:bg-gray-200 hover:cursor-pointer w-43 text-sm"
				@click="openModal"
			>
				<Icon name="material-symbols:add" class="text-[1.2em]" /> Nueva Tarea
			</button>
		</section>
		<section
			class="search new_task border border-gray-400 py-4 px-8 w-full flex items-center justify-start rounded-lg flex gap-2"
		>
			<button
				type="button"
				:class="
					filterSelected === 'all'
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 hover:bg-gray-800 bg-black text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
				"
			>
				📋 Todas
				<span
					class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-0 bg-gray-700 text-white"
					>{{ filterCounts.all }}</span
				>
			</button>

			<button
				type="button"
				:class="
					filterSelected === 'created'
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
			>
				<Icon name="streamline-emojis:file-folder" class="text-[1.6em]" />
				<span>Creadas</span>
				<span
					class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-0 bg-gray-700 text-white"
					>{{ filterCounts.created }}</span
				>
			</button>

			<button
				type="button"
				:class="
					filterSelected === 'current'
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
			>
				<Icon
					name="streamline-emojis:hourglass-not-done-2"
					class="text-[1.6em]"
				/>
				<span>En Progreso</span>
				<span
					class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-0 bg-gray-700 text-white"
					>{{ filterCounts.doing }}</span
				>
			</button>

			<button
				type="button"
				:class="
					filterSelected === 'completed'
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
			>
				<Icon name="fluent-color:checkmark-circle-20" class="text-[1.6em]" />
				<span>Completadas</span>
				<span
					class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-0 bg-gray-700 text-white"
					>{{ filterCounts.completed }}</span
				>
			</button>
		</section>
		<section
			:class="
				tasks.length == 0
					? 'rounded-lg border text-card-foreground shadow-sm border-dashed border-2 border-gray-700 flex items-center justify-between space-x-2'
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
					class="card w-full rounded-lg py-4 px-5 border-1 border-gray-400 flex flex-row gap-2"
					v-for="(task, idx) in tasks"
					:key="idx"
				>
					<div class="flex-1">
						<h3>{{ task.title }}</h3>
						<p class="text-gray-400 text-sm">{{ task.description }}</p>
						<div class="info flex flex-row gap-4 mt-3">
							<span class="text-gray-400 text-sm">
								📅
								{{
									task.created_at.getDate() +
									"/" +
									(task.created_at.getMonth() + 1) +
									"/" +
									task.created_at.getFullYear()
								}}</span
							>

							<div
								class="border border-gray-700 text-sm px-4 rounded-full py-1"
							>
								📝 {{ task.status }}
							</div>
							<div
								class="border border-gray-700 text-sm px-4 rounded-full cursor-pointer bg-red-900/70 py-1"
								v-if="task.cync === false"
								@click="cyncTasks(task)"
							>
								Sin sincronizar
							</div>
							<div
								class="border border-gray-700 text-sm px-4 rounded-full cursor-default bg-green-900/70 py-1"
								v-else
							>
								Sincronizado
							</div>
						</div>
					</div>
					<div class="flex flex-row items-start justify-center space-x-2">
						<div class="flex flex-row items-center justify-center space-x-2">
							<button
								class="border py-1 px-2 border-gray-500 flex items-center justify-center rounded-lg cursor-pointer text-sm gap-1"
							>
								<Icon
									name="streamline-emojis:hourglass-not-done-2"
									class="text-[1em]"
								/>
								En Progreso
							</button>
							<button
								class="border py-1 px-2 border-gray-500 flex items-center justify-center rounded-lg cursor-pointer text-sm gap-1"
							>
								<Icon
									name="fluent-color:checkmark-circle-20"
									class="text-[1em]"
								/>
								Completar
							</button>
							<button
								class="text-[1.5em] bg-red-900 text-white hover:bg-red-700 flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer"
							>
								<Icon name="material-symbols:delete-outline-sharp" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			taskStatuses: ["all", "created", "doing", "pending", "deleted"],
			filterSelected: "all",
			tasks: [
				{
					title: "Tarea 1",
					description: "Descripción de la tarea 1",
					status: "current",
					created_at: new Date(),
					updated_at: "null",
					cync: false,
				},
			],
			showModal: false,
			newTask: {
				title: "",
				description: "",
			},
		};
	},
	computed: {
		filterCounts() {
			const counts = {
				all: this.tasks.length,
				created: 0,
				doing: 0,
				completed: 0,
				deleted: 0,
			};

			this.tasks.forEach((task) => {
				switch (task.status) {
					case "created":
						counts.created++;
						break;
					case "doing":
						counts.doing++;
						break;
					case "completed":
						counts.completed++;
						break;
					case "deleted":
						counts.deleted++;
						break;
				}
			});

			return counts;
		},
	},
	methods: {
		openModal() {
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
			this.newTask.title = "";
			this.newTask.description = "";
		},
		createTask(e) {
			e.preventDefault();
			if (!this.newTask.title) return;
			// Lóígica
			this.tasks.push({
				title: this.newTask.title,
				description: this.newTask.description,
				status: "current",
				created_at: new Date(),
				updated_at: "null",
			});
			this.closeModal();
		},
		cyncTasks(task) {
			setTimeout(() => {
				const tsk = this.tasks.find((t) => t.id === task.id);
				if (tsk) {
					tsk.cync = !tsk.cync;
				} else {
					alert("Task not found");
				}
			}, 3000);
		},
		deleteTask(task) {
			const index = this.tasks.indexOf(task);
			if (index !== -1) {
				this.tasks.splice(index, 1);
			}
		},
	},
};
</script>

<!-- import css file -->
<style src="./style.css"></style>
