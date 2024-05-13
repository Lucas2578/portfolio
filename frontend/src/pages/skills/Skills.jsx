import React, { useState, useEffect } from 'react';
import { fetchWebSkills, fetchOtherSkills } from '../../utils/getDatas';
import Starfield from '../../components/starfield/Starfield';
import SkillCard from '../../components/cards/skill/SkillCard';
import Layout from '../../components/layout/Layout';

const Skill = () => {
  // Initializing two constants with empty array
  const [webSkills, setWebSkills] = useState([]);
  const [otherSkills, setOtherSkills] = useState([]);

    useEffect(() => {

      // Webskills datas
      fetchWebSkills()
      .then(data => {
          setWebSkills(data);
      })
      .catch(error => {
          console.error('Error fetching webskills:', error);
      });
      
      // Otherskills datas
      fetchOtherSkills()
      .then(data => {
          setOtherSkills(data);
      })
      .catch(error => {
          console.error('Error fetching otherskills:', error);
      });
  }, 
  []);

    return (
        <Layout>
            <main className="skill">
                <Starfield />
                <SkillCard webSkills={webSkills} otherSkills={otherSkills}/>
            </main>
        </Layout>
    );
  };

export default Skill;