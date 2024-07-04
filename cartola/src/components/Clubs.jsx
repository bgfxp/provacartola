import React, { useEffect, useState } from 'react';
import './Clubs.css';

const Clubs = ({ searchTerm }) => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch('https://api.cartola.globo.com/clubes');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados da API');
        }
        const data = await response.json();
        const clubsData = Object.values(data);
        setClubs(clubsData);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchClubs();
  }, []);

  const clubNicknames = {
    FLAMENGO: 'MENGÃO',
    VASCO: 'GIGANTE DA COLINA',
    FLUMINENSE: 'TRICOLOR',
    BOTAFOGO: 'FOGUINHO',
    PALMEIRAS: 'PORCO',
    SAO_PAULO: 'TRICOLOR',
    SANTOS: 'PEIXE',
    CORINTHIANS: 'TIMÃO',
    GREMIO: 'IMORTAL',
    INTERNACIONAL: 'COLORADO',
    ATLETICO_MINEIRO: 'GALO',
    CRUZEIRO: 'RAPOSA',
    ATLETICO_PARANAENSE: 'FURACÃO',
    BAHIA: 'TRICOLOR DE AÇO',
    SPORT: 'LEÃO',
    CEARA: 'VOZÃO',
    FORTALEZA: 'LEÃO DO PICI',
    GOIAS: 'ESMERALDINO',
    CORITIBA: 'COXA BRANCA',
    BOTAFOGO_SP: 'FOGUINHO',
    AVAI: 'LEÃO DA ILHA',
    PONTE_PRETA: 'MACACA',
    CSA: 'AZULÃO',
    CRB: 'GALO DA PRAIA',
    FIGUEIRENSE: 'FURACÃO DO ESTREITO',
    GUARANI: 'BUGRE',
    JUVENTUDE: 'PAPOULAS NEGRAS',
    OPERARIO: 'FANTASMA',
    SAMPAIO_CORREA: 'TUBARÃO',
    VILA_NOVA: 'TIGRÃO',
    CUIABA: 'DOURADO',
    CHAPECOENSE: 'CHAPÉUZINHO VERDE',
    AMERICA_MG: 'COELHÃO',
    NAUTICO: 'TIMBU',
    BOTAFOGO_PB: 'BELO',
    SANTA_CRUZ: 'COBRA CORAL',
    ABC: 'ELEFANTE',
    REMO: 'LEÃO AZUL',
    CSA: 'AZULÃO',
    PAYSANDU: 'PAPÃO',
    FORTALEZA: 'LEÃO DO PICI',
    VITORIA: 'LEÃO DA BARRA',
  };

  const filteredClubs = clubs.filter(club =>
    club.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="clubs">
      <ul className="club-list">
        {filteredClubs.map((club) => (
          <li key={club.id} className="club-item">
            <img src={club.escudos['60x60']} alt={club.nome} />
            <div>
              <strong>{club.nome}</strong>
              <p>{clubNicknames[club.nome.toUpperCase()] || club.abreviacao}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clubs;
