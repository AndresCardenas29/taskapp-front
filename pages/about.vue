<template>
	<div
		class="header container max-w-5xl flex flex-row items-center justify-start gap-4 mt-10 m-auto p-5"
	>
		<NuxtLink
			class="flex flex-row items-center gap-4 hover:bg-gray-200/20 px-3 py-1 rounded-sm hover:cursor-pointer transition-all"
			to="/"
		>
			<Icon name="meteor-icons:arrow-left" class="text-white" />
			<button class="text-sm text-white font-thin hover:cursor-pointer">
				Volver
			</button>
		</NuxtLink>
		<h2
			class="text-4xl font-extrabold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent font-stretch-ultra-expanded"
		>
			Acerca de Task APP
		</h2>
	</div>
	<div
		class="about-app container max-w-5xl flex flex-col items-start gap-4 mt-10 m-auto text-gray-100 px-10"
	>
		<div class="title text-3xl font-extrabold">
			<Icon name="fluent-emoji:mobile-phone" />
			Sobre Task App
		</div>
		<p
			class="text-lg font-normal text-gray-400 mt-4 font-thin font-stretch-condensed"
		>
			Task APP es una aplicación moderna de gestión de tareas diseñada para
			funcionar tanto online como offline. Con un diseño minimalista y efectos
			visuales elegantes, te permite organizar tus tareas de manera eficiente
			con estados personalizables y sincronización automática.
		</p>
		<div class="features-technologies w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
			<div class="features">
				<h3 class="text-lg font-bold mb-2">
					<Icon name="fluent-emoji:rocket" />
					Características
				</h3>
				<ul class="list-disc list-inside text-gray-400 mt-2">
					<li>Funcionalidad offline/online</li>
					<li>Sincronización automática</li>
					<li>4 estados de tareas</li>
					<li>Filtros y búsqueda avanzada</li>
					<li>Tema oscuro/claro</li>
				</ul>
			</div>
			<div class="technologies">
				<h3 class="text-lg font-bold mb-2">
					<Icon name="fluent-emoji:hammer-and-pick" />
					Tecnologías
				</h3>
				<div
					class="list-disc list-inside text-gray-400 mt-2 flex flex-wrap gap-2"
				>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						Vue.js 3
					</div>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						JavaScript
					</div>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						HTML5
					</div>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						CSS
					</div>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						TypeScript
					</div>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						Tawilwind CSS
					</div>
					<div
						class="rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap bg-gray-500/50 text-gray-100 w-fit"
					>
						Iconify
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="about-creator container max-w-5xl m-auto mt-10 text-gray-100 px-10">
		<h1 class="text-3xl font-bold mb-5">
			<Icon name="fluent-emoji:technologist-light" />
			Sobre el creador
		</h1>
		<div class="flex md:flex-row flex-col mb">
			<div class="img md:w-[320px] w-full flex justify-center mb-8">
				<img
					src="/assets/img/andres-cardenas.jpg"
					alt="Andres Cardenas"
					class="rounded-full w-50 h-50 md:w-32 md:h-32"
				/>
			</div>
			<div class="info flex flex-col gap-5">
				<div class="name">
					<h2 class="font-bold">Andres Cardenas</h2>
					<p class="text-gray-100/50 text-sm flex-col">
						Desarrollador Full Stack apasionado por crear aplicaciones web
						modernas y funcionales. Especializado en React, Next.js y
						tecnologías frontend, con experiencia en diseño UX/UI y desarrollo
						de aplicaciones que funcionan tanto online como offline.
					</p>
				</div>
				<div class="experiencia">
					<h3 class="font-bold">
						<Icon name="fluent-emoji:briefcase" />
						Experiencia:
					</h3>
					<div class="list text-sm font-normal pt-1">
						<ul class="list-disc list-inside text-gray-100/50">
							<li>Desarrollador Backend con Node.js, Express.js y Nest.js</li>
							<li>Integración de bases de datos PostgreSQL y MongoDB</li>
							<li>Implementación de JWT para seguridad de APIs</li>
							<li>Desarrollo de APIs RESTful y documentación técnica</li>
							<li>Maquetación web con HTML, CSS, JavaScript y Figma</li>
							<li>Desarrollador Full Stack con Next.js y React</li>
							<li>Implementación de CI/CD con GitHub Actions y Dockploy</li>
							<li>Despliegue de servidores Linux con Docker y Nginx</li>
							<li>Creación de sistemas de facturación electrónica con DIAN</li>
							<li>Desarrollo de sistemas de notificaciones en tiempo real</li>
							<li>Scraping y automatización de datos para marketing</li>
							<li>Diseño y optimización de arquitecturas escalables</li>
							<li>Implementación de SSR y Auth.js en Next.js</li>
							<li>Desarrollador Backend con Python</li>
							<li>Uso de Astro.js combinando React y Vue</li>
						</ul>
					</div>
				</div>
				<div class="contacto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
					<a
						class="button flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-md text-white border border-gray-500/50"
						rel="noopener noreferrer"
						aria-label="Email"
						aria-describedby="link-to-email"
						data-cy="link-to-email"
						target="_blank"
					>
						<Icon name="mdi:email" />
						<span>mandrescardenash@gmail.com</span>
					</a>
					<a
						class="button flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-md text-white border border-gray-500/50"
						href="https://github.com/AndresCardenas29"
						target="_blank"
					>
						<Icon name="simple-icons:refinedgithub" />
						<span>GitHub</span>
					</a>
					<a
						class="button flex flex-row gap-2 items-center justify-center px-4 py-2 rounded-md text-white border border-gray-500/50"
						href="https://www.linkedin.com/in/mandrescardenash/"
						target="_blank"
					>
						<Icon name="mdi:linkedin" />
						<span>LinkedIn</span>
					</a>
				</div>
			</div>
		</div>
		<div
			class="footer flex flex-col items-center justify-center w-full py-4 text-gray-100/80 text-sm py-16"
		>
			<p class="text-center">
				Hecho por
				<a
					href="https://github.com/AndresCardenas29"
					target="_blank"
					class="text-gray-100/90 hover:text-white font-bold underline"
					>Andres Cardenas</a
				>
				usando Nuxt.js
			</p>
			<p class="text-center">© 2025 Task APP. Todos los derechos reservados.</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: "About Task App | Andres Cardenas",
});
</script>

<style></style>

