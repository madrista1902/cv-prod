import React from "react";
import "./Services.css";
import { GoCheck } from "react-icons/go";
const Services = () => {
  return (
    <section id="Services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <GoCheck className="service_list-icon" />
              <p>configurer l'infrastructure d'un projet ainsi que les dépendances entre les différents composants logiciels à utiliser.</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>concevoir, manipuler et interroger des bases de données .</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>concevoir le code de 'back-end' et les API d'accès à ces données sous forme de webservices, en utilisant des langages tels que Java, Python, Ruby, PHP, Javascript .</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>concevoir le code de 'front-end' qui est exécuté sur la plate-forme de l'utilisateur, le plus souvent dans un navigateur Web sur un smartphone ou un ordinateur de bureau, dans des langages tels que Javascript et ses bibliothèques, HTML, CSS .</p>
            </li>
          </ul>
        </article>
       
        <article className="service">
          <div className="service_head">
            <h3>Web Developpement</h3>
          </div>
          <ul className="service_list">
            <li>
              <GoCheck className="service_list-icon" />
              <p>de gérer et planifier un projet (par exemple avec des méthodes de développement agiles telles que Scrum ou Kanban).</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>d'interagir avec le client, cerner et définir ses besoins, s'adapter lorsque ceux-ci évoluent .</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>documenter l'ensemble des parties d'un projet.</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>réaliser la programmation d’un site ou d'une application web à la fois en front-end et back-end.</p>
            </li>
            <li>
              <GoCheck className="service_list-icon" />
              <p>Il dispose ainsi de compétences variées lui permettant de travailler sur chaque étape d'un projet de création allant du développement à la production.</p>
            </li>
          </ul>
        </article>
    
        <article className="service">
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>
            <ul className="service_list">
              <li>
              <GoCheck className='service_list-icon'/>
              <p>Un développeur full stack est ainsi familiarisé avec chacune de ces couches, même s'il a souvent une affinité ou des compétences plus étendues dans l'une d'elles.
          </p>
              </li>
              <li>
              <GoCheck className='service_list-icon'/>
              <p>Ses compétences larges lui permettent de travailler sur des projets de petite à moyenne importance (en termes de volume de travail et/ou complexité) sans avoir à recourir à d'autres développeurs.
          </p>
              </li>
              <li>
              <GoCheck className='service_list-icon'/>
              <p>Pour des projets de grande envergure, ses connaissances étendues restent un atout dans une équipe :
          </p>
              </li>
              <li>
              <GoCheck className='service_list-icon'/>
              <p> il comprend comment les différentes parties communiquent et s'articulent et peut être à l'initiative de propositions judicieuses concernant les choix techniques.
          </p>
              </li>
              <li>
              <GoCheck className='service_list-icon'/>
              <p>Ce ci tous a propos de service Développeur full stack.
          </p>
              </li>
            </ul>
          </article>
       
      </div>
    </section>
  );
};

export default Services;
