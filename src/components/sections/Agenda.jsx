import { Container } from "../Container";

export const Agenda = () => {
	return (
		<section className="bg-blue-500 py-24">
			<Container className="space-y-10">
				<div className="space-y-3">
					<h1 className="text-3xl text-white font-semibold">Agenda</h1>
					<p className="text-lg text-gray-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
						maiores laborum blanditiis earum rerum inventore atque soluta
						suscipit unde pariatur repudiandae numquam cum omnis laudantium
						doloribus, velit non dolorum? Sapiente.
					</p>
				</div>
				<div className="grid lg:grid-cols-3 gap-8 text-white text-lg">
					<div>
						<div className="font-semibold border-white border-opacity-50 border-b py-3">
							Day 1
						</div>
						<div>
							<div className="flex py-3">
								<div className="w-48">10:00 - 11:00</div>
								<div className="w-full">
									<div className="text-xl text-white font-semibold">
										Registration
									</div>
								</div>
							</div>
							<div className="flex py-3">
								<div className="w-48">10:00 - 11:00</div>
								<div className="w-full">
									<div className="text-xl text-white font-semibold">
										Jetpack Compose: Modern UI Framework in Android
									</div>
									<div className="italic">Muh. Rahmatullah</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="font-semibold border-white border-opacity-50 border-b py-3">
							Day 2
						</div>
						<div>
							<div className="flex py-3">
								<div className="w-48">10:00 - 11:00</div>
								<div className="w-full">
									<div className="text-xl text-white font-semibold">
										Registration
									</div>
								</div>
							</div>
							<div className="flex py-3">
								<div className="w-48">10:00 - 11:00</div>
								<div className="w-full">
									<div className="text-xl text-white font-semibold">
										Jetpack Compose: Modern UI Framework in Android
									</div>
									<div className="italic">Muh. Rahmatullah</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="font-semibold border-white border-opacity-50 border-b py-3">
							Day 3
						</div>
						<div>
							<div className="flex py-3">
								<div className="w-48">10:00 - 11:00</div>
								<div className="w-full">
									<div className="text-xl text-white font-semibold">
										Registration
									</div>
								</div>
							</div>
							<div className="flex py-3">
								<div className="w-48">10:00 - 11:00</div>
								<div className="w-full">
									<div className="text-xl text-white font-semibold">
										Jetpack Compose: Modern UI Framework in Android
									</div>
									<div className="italic">Muh. Rahmatullah</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};
