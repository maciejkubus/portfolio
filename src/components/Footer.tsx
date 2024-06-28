export function Footer() {
	return (
		<footer className="container mx-auto px-2 md:px-8 xl:px-12 mb-16">
			<div className="w-full p-8 bg-black text-white rounded-3xl space-y-8">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full space-y-8">
						<h3 className="text-4xl font-bold">Astoria Star</h3>
						<p className="text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cupiditate facere sequi hic exercitationem nisi rem, tempora accusamus aliquid, mollitia suscipit minima neque.
						</p>
					</div>
					<div className="w-full xl:w-2/3 space-y-8">
						<h2 className="text-4xl font-bold">Informacje</h2>
						<div className="text-lg">
							<div>astoriastar@email.com</div>
							<div>+48 570 277 237</div>
							<div>ul. Racławicka 1/12</div>
							<div>80-406 Gdańsk</div>
						</div>
					</div>
					<div className="w-full xl:w-2/3 space-y-8">
						<h2 className="text-4xl font-bold">Linki</h2>
						<div className="text-lg">
							<div>Polityka prywatności</div>
							<div>Kontakt</div>
							<div>Nasze portfolio</div>
							<div>Bezpłatna wycena</div>
						</div>
					</div>
				</div>
				<div className="text-xl text-center">
					Copyright 2024 © Astoria Star
				</div>
			</div>
		</footer>
	)
}