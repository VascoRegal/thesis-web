import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ThesisInfo = {
  author: 'Vasco Jorge Regal Sousa',
  mentor: 'Eurico Farinha Pedrosa',
  comentor: 'André Ventura da Cruz Marnoto Zúquete',
  course: 'MEI',
  title: 'Rede Overlay Privada e Segura para Múltiplos Clientes Baseada em Wireguard',
  pdfurl: '/files/proposta.pdf',
  uni: 'Universidade de Aveiro',
  dep: 'DETI',
  date: '2023/24'

}

export default function HomepageFeatures() {
  return (
    <section className={styles.overview}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className="text-center padding-horiz-md">
              <h3>Autor</h3>
              <p>{ThesisInfo.author} ({ThesisInfo.course})</p>
              <hr />
              <h3>Docentes</h3>
              <p>{ThesisInfo.mentor} (orientador)</p>
              <p>{ThesisInfo.comentor} (co-orientador)</p>
              <hr />
              <p>{ThesisInfo.dep}, {ThesisInfo.uni}, {ThesisInfo.date}</p>
            </div>
          </div>
          <div className={clsx("col col--6")}>
            <div className="text-center padding-horiz-md">
              <h3>Título</h3>
              <p>{ThesisInfo.title}</p>
              <hr />
              <h3>Proposta</h3>
              <a href={ThesisInfo.pdfurl}>link</a>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
