import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Layout from '@/context/Layout';
import { bucketUrl } from '@/lib/utils';
import type { PageProps } from '@/types/Noticias';

type Periodista = {
	id: number;
	name: string;
	slug: string;
	perfil?: string | null;
	bio?: string | null;
};

type PeriodistasPageProps = PageProps & { periodistas?: Periodista[] };

const PeriodistasList: React.FC = () => {
	const { periodistas = [] } = usePage<PeriodistasPageProps>().props;

	return (
		<Layout>
			<Head title="Periodistas" />
			<div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white px-6 py-10 mt-32">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
						Periodistas de minuto60
					</h1>

					{(!periodistas || periodistas.length === 0) ? (
						<p className="text-center text-gray-600">No hay periodistas para mostrar.</p>
					) : (
						<ul className="grid gap-6 md:grid-cols-2">
							{periodistas.map((p) => (
								<li key={p.id} className="bg-white/70 backdrop-blur rounded-xl border border-white/40 shadow p-4">
									<Link
										href={p.slug ? `/periodista/${p.slug}` : '#'}
										className="flex items-center gap-4 hover:text-rose-600"
									>
										{/* <img
											src={p.perfil ? `${bucketUrl}/${p.perfil}` : '/img/periodista_default.webp'}
											alt={p.name}
											loading="lazy"
											className="w-16 h-16 object-cover rounded-full border-2 border-gray-200 shrink-0"
										/> */}
										<div className="min-w-0">
											<h3 className="text-lg font-semibold truncate">{p.name}</h3>
											{p.bio && <p className="text-gray-600 text-sm overflow-hidden text-ellipsis">{p.bio}</p>}
										</div>
									</Link>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default PeriodistasList;

