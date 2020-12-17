import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

const Timeline = () => (
        <div className="timeline">
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date="2020"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Lead Dev Front</h3>
                    {/* <h4 className="vertical-timeline-element-subtitle">'Apothéose'</h4> */}
                    <p>
                    Projet de fin de formation "My travel Road", site web à destination des grands voyageurs, sur une durée d'un mois au sein d'un groupe de 4 personnes
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date="2020"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Ecole O'Clock</h3>
                    <h4 className="vertical-timeline-element-subtitle">Titre professionnelle développeur Web et web mobile</h4>
                    <p>
                    Formation intensive de niveau 5 sur une période de 700h.
                    Ecole labellisée « Grande École du Numérique »
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date="2020"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Certification Opquast</h3>
                    <h4 className="vertical-timeline-element-subtitle">Maîtrise de la qualité en projet Web</h4>
                    <p>
                    Score de 830 - Niveau Avancé
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2019-2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Event Manager</h3>
                    <h4 className="vertical-timeline-element-subtitle">Le Méridien Beach Plaza | Monaco, MC</h4>
                    <p>
                    Gestion d’une équipe de 5 personnes, gestion des plannings, établissement des prévisions annuelles, gestion des dossiers les plus importants, formation et mise en place des nouveaux outils informatiques, recrutement et formation des nouveaux membres de l’équipe ou stagiaire
                    </p>
                </VerticalTimelineElement>               
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date="2017-2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Senior Event Coordinator</h3>
                    <h4 className="vertical-timeline-element-subtitle">Monaco, MC</h4>
                    <p>
                    Gestion et répartition des dossiers d’équipe, étude de marché et développement d’un pôle mariage au sein de l’hôtel
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date="2014-2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Event Coordinator</h3>
                    <h4 className="vertical-timeline-element-subtitle">Le Méridien Beach Plaza | Monaco, MC</h4>
                    <p>
                    Gestion de projets, de budgets et d’un centre de conférence de plus de 3000m2, qualification de demandes et préparation de devis et contrats, vente optimisée, création et suivi direct de l’évènement jusqu’à l’envoi de la facture, suivi des propositions et développement d’une relation durable avec les clients, communication directe avec tous les départements de l’hôtel et prestataires externes
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#20324598', color: '#fff', boxShadow: '0px 0px 6px #fff' }}
                    date="2012-2014"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Food & Beverage Coordinator</h3>
                    <h4 className="vertical-timeline-element-subtitle">Constance Lémuria Seychelles | Praslin, Seychelles</h4>
                    {/* <p>
                    Gestion de projets, de budgets et d’un centre de conférence de plus de 3000m2, qualification de demandes et préparation de devis et contrats, vente optimisée, création et suivi direct de l’évènement jusqu’à l’envoi de la facture, suivi des propositions et développement d’une relation durable avec les clients, communication directe avec tous les départements de l’hôtel et prestataires externes
                    </p> */}
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
)

export default Timeline;