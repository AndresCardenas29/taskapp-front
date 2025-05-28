<template>
	<!-- Modal -->
	<div
		class="modal fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
		v-if="showModal"
	>
		<div
			class="form border-1 border-gray-800 rounded-lg shadow-md px-6 py-4 w-sm text-white font-medium border-b bg-[#0b0b0b]/80"
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
						class="border border-gray-700 rounded-lg shadow-md px-4 py-2 w-full text-white font-medium border-b focus:outline-none focus:ring-1 focus:ring-gray-300"
						placeholder="Titlulo de la tarea"
						v-model="newTask.title"
						autocomplete="off"
					/>
				</div>
				<div class="description mb-4">
					<span>Descripción:</span>
					<textarea
						id="default-search"
						class="border border-gray-700 rounded-lg shadow-md px-4 py-2 w-full text-white font-medium border-b focus:outline-none focus:ring-1 focus:ring-gray-300 min-h-[100px] max-h-[200px]"
						placeholder="Descripción opcional"
						v-model="newTask.description"
						autocomplete="off"
					/>
				</div>
				<div class="buttons flex gap-4">
					<input
						type="submit"
						value="Crear tarea"
						:disabled="isCreatingTask"
						class="bg-white text-black font-medium rounded-lg shadow-md px-4 py-2 w-full text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer disabled:bg-gray-600 disabled:hover:cursor-wait"
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
	<Header :serverStatusH="serverStatus" />
	<!-- min-h-screen bg-gradient-to-br from-background via-background to-muted/20 -->
	<div class="container mx-auto text-white py-4 px-8 flex flex-col gap-5">
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
						v-model="search"
						autocomplete="off"
						class="block w-full p-2 ps-10 text-sm text-gray-300 border border-gray-400 rounded-lg placeholder:text-gray-400 focus:border-gray-400 focus:outline-gray-400"
						placeholder="Buscar tarea..."
					/>
				</div>
			</div>
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
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
				@click="filterSelected = 'all'"
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
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
				@click="filterSelected = 'created'"
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
					filterSelected === 'doing'
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
				@click="filterSelected = 'doing'"
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
						? 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 bg-white/70 text-black flex flex-row gap-2 item-center justify-center hover:cursor-pointer'
						: 'focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 hover:bg-white/30 text-white flex flex-row gap-2 item-center justify-center hover:cursor-pointer transition'
				"
				@click="filterSelected = 'completed'"
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
					class="card w-full rounded-lg py-4 px-5 border-1 border-gray-400 flex flex-row gap-2 transition-all"
					v-for="(task, idx) in filteredTasks"
					:key="idx"
					:class="statusClass(task.status)"
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
								class="border border-gray-700 text-sm px-4 rounded-full py-1 transition-all"
							>
								📝 {{ task.status }}
							</div>
							<div
								class="border border-gray-700 text-sm px-4 rounded-full cursor-pointer bg-red-900/70 py-1"
								v-if="task.pendingSync === true"
								@click="syncTasks(task)"
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
								@click="startTask(task)"
							>
								<Icon
									name="streamline-emojis:hourglass-not-done-2"
									class="text-[1em]"
								/>
								En Progreso
							</button>
							<button
								class="border py-1 px-2 border-gray-500 flex items-center justify-center rounded-lg cursor-pointer text-sm gap-1"
								@click="completeTask(task)"
							>
								<Icon
									name="fluent-color:checkmark-circle-20"
									class="text-[1em]"
								/>
								Completar
							</button>
							<button
								class="text-[1.5em] bg-red-900 text-white hover:bg-red-700 flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer"
								@click="deleteTask(task)"
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
import { BACKEND_URL } from "@/config/env";
export default {
	name: "Home",
	data() {
		return {
			taskStatuses: ["all", "created", "doing", "pending", "deleted"],
			filterSelected: "all",
			tasks: [],
			showModal: false,
			newTask: {
				title: "",
				description: "",
			},
			search: "",
			serverStatus: false,
			isCreatingTask: false,
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
		filteredTasks() {
			const term = this.search.toLowerCase();

			// Orden personalizado: doing > created > completed > deleted
			const order = { doing: 0, created: 1, completed: 2, deleted: 3 };

			// Primero filtra, luego ordena
			return this.tasks
				.filter((task) => {
					const matchesSearch =
						task.title.toLowerCase().includes(term) ||
						(task.description && task.description.toLowerCase().includes(term));
					const matchesFilter =
						this.filterSelected === "all" ||
						task.status === this.filterSelected;
					return matchesSearch && matchesFilter;
				})
				.sort((a, b) => {
					return (order[a.status] ?? 99) - (order[b.status] ?? 99);
				});
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
			if (!this.newTask.title || this.isCreatingTask) return;

			this.isCreatingTask = true;

			const nuevaTarea = {
				title: this.newTask.title,
				description: this.newTask.description,
				status: "created",
				created_at: new Date(),
				updated_at: new Date(),
			};

			// Intenta guardar en el backend
			fetch(`${BACKEND_URL}/tasks`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(nuevaTarea),
			})
				.then((res) => res.json())
				.then((data) => {
					// Si el backend responde con la tarea creada, úsala
					this.tasks.push({
						...data,
						created_at: new Date(data.created_at),
						updated_at: new Date(data.updated_at),
						pendingSync: false,
					});
				})
				.catch((err) => {
					console.log(err);

					// Si falla, agrega la tarea localmente y márcala como no sincronizada
					this.tasks.push({
						...nuevaTarea,
						id: -(Math.random() * 1000 + 1),
						pendingSync: true,
					});
				})
				.finally(() => {
					this.isCreatingTask = false;
					this.closeModal();
				});

			// Lóígica
			/* this.tasks.push({
				id: Math.random() * 1000 + 1,
				title: this.newTask.title,
				description: this.newTask.description,
				status: "created",
				created_at: new Date(),
				updated_at: "null",
			});
			this.closeModal(); */
		},
		syncTasks() {
			// obtiene las tareas sin sinronizar del local storage
			const pendingTasks = this.tasks.filter((t) => t.pendingSync);
			console.log(pendingTasks);

			fetch(`${BACKEND_URL}/tasks/sync`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(pendingTasks),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log("Tasks synced:", data);
					if (data.error) {
						console.error("Error syncing tasks:", data.error);
					} else {
						console.log("Tasks synced successfully");
						this.getTasks();
					}
				})
				.catch((err) => {
					console.error(err);
				});
		},
		deleteTask(task) {
			/* const index = this.tasks.indexOf(task);
			if (index !== -1) {
				this.tasks.splice(index, 1);
			} */
			task.status = "deleted";
			task.updated_at = new Date();
			task.pendingSync = true;

			// intenta actualizar en el backend
			fetch(`${BACKEND_URL}/tasks/${task.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			})
				.then((res) => res.json())
				.then((data) => {
					// Actualiza la tarea con la respuesta del backend
					Object.assign(task, {
						...data,
						updated_at: new Date(data.updated_at),
						pendingSync: false,
					});
				})
				.catch((err) => {
					console.log({ err });
					task.pendingSync = true;
				});
		},
		startTask(task) {
			task.status = "doing";
			task.updated_at = new Date();
			task.pendingSync = true;

			// intenta actualizar en el backend
			fetch(`${BACKEND_URL}/tasks/${task.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			})
				.then((res) => res.json())
				.then((data) => {
					// Actualiza la tarea con la respuesta del backend
					Object.assign(task, {
						...data,
						updated_at: new Date(data.updated_at),
						pendingSync: false,
					});
				})
				.catch((err) => {
					console.log({ err });
					task.pendingSync = true;
				});
		},
		completeTask(task) {
			task.status = "completed";
			task.updated_at = new Date();
			task.pendingSync = true;

			// intenta actualizar en el backend
			fetch(`${BACKEND_URL}/tasks/${task.id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(task),
			})
				.then((res) => res.json())
				.then((data) => {
					// Actualiza la tarea con la respuesta del backend
					Object.assign(task, {
						...data,
						created_at: new Date(data.created_at),
						updated_at: new Date(data.updated_at),
						pendingSync: false,
					});
				})
				.catch((err) => {
					console.log({ err });
					task.pendingSync = true;
				});
		},
		statusClass(status) {
			switch (status) {
				case "created":
					return "bg-blue-500/30 text-white";
				case "doing":
					return "bg-yellow-300/20 text-white border-yellow-400";
				case "completed":
					return "bg-green-600/20 text-white border-green-600";
				case "deleted":
					return "bg-red-500/30 text-white border-red-400";
			}
		},
		selectFilter(status) {
			this.filterStatus = status;
		},
		checkServerStatus() {
			console.log("Checking server status...");

			fetch(`${BACKEND_URL}/tasks`, { method: "HEAD" })
				.then((res) => {
					this.serverStatus = res.ok;
				})
				.catch(() => {
					this.serverStatus = false;
				});
		},
		getTasks() {
			// Intenta traer las tareas del backend
			fetch(`${BACKEND_URL}/tasks`)
				.then((res) => res.json())
				.then((datajson) => datajson.data)
				.then((data) => {
					// Convierte las fechas de string a Date si es necesario
					this.tasks = data.map((task) => ({
						...task,
						created_at: new Date(task.created_at),
					}));

					// Actualiza localStorage con los datos del backend
					localStorage.setItem("tasks", JSON.stringify(this.tasks.data));
				})
				.catch((err) => {
					console.log({ err });
					this.serverStatus = false;

					// Si falla, usa localStorage como respaldo
					const saved = localStorage.getItem("tasks");
					if (saved) {
						this.tasks = JSON.parse(saved).map((task) => ({
							...task,
							created_at: new Date(task.created_at),
						}));
					}
				});
		},
	},
	mounted() {
		// Cargar tareas desde localStorage al iniciar
		const saved = localStorage.getItem("tasks");
		if (saved) {
			// Convierte las fechas de string a Date si es necesario
			this.tasks = JSON.parse(saved).map((task) => ({
				...task,
				created_at: new Date(task.created_at),
			}));
		}

		// Intenta traer las tareas del backend
		fetch(`${BACKEND_URL}/tasks`)
			.then((res) => res.json())
			.then((datajson) => datajson.data)
			.then((data) => {
				// Convierte las fechas de string a Date si es necesario
				this.tasks = data.map((task) => ({
					...task,
					created_at: new Date(task.created_at),
				}));

				// Actualiza localStorage con los datos del backend
				localStorage.setItem("tasks", JSON.stringify(this.tasks.data));
			})
			.catch((err) => {
				console.log({ err });
				this.serverStatus = false;

				// Si falla, usa localStorage como respaldo
				const saved = localStorage.getItem("tasks");
				if (saved) {
					this.tasks = JSON.parse(saved).map((task) => ({
						...task,
						created_at: new Date(task.created_at),
					}));
				}
			});

		window.addEventListener("online", this.checkServerStatus);
		window.addEventListener("offline", () => {
			this.serverStatus = false;
		});

		// Hacer ping al backend cada 10 segundos
		this.pingInterval = setInterval(() => {
			this.checkServerStatus();
			if (this.serverStatus) {
				console.log("sincronizando datos... ");
				this.syncTasks();
			} else {
				console.log("tasks no sincronizados");
			}
		}, 10000);
	},
	watch: {
		// Guarda en localStorage cada vez que tasks cambia
		tasks: {
			handler(newTasks) {
				localStorage.setItem("tasks", JSON.stringify(newTasks));
			},
			deep: true,
		},
	},
	beforeUnmount() {
		// Limpia el intervalo al salir de la página
		clearInterval(this.pingInterval);
		window.removeEventListener("online", this.checkServerStatus);
		window.removeEventListener("offline", () => {
			this.serverStatus = false;
		});
	},
};

useHead({
	title: "Task App | Andres Cardenas",
});
</script>

<!-- import css file -->
<style src="./style.css"></style>
