import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));
const courses = [
    {
      title: 'Accelerated Multivariable Calculus',
      description: "Topics include vector geometry, equations of lines and planes, and space curves (velocity, acceleration, arclength), limits and continuity, partial derivatives, tangent planes and differentials, the Chain Rule, directional derivatives and applications, and optimization problems. It continues with multiple integration, vector fields, line integrals, and finishes with a study of Green's and Stokes' theorem.",
    },
    {
      title: 'Linear Algebra',
      description: "This course presents the fundamental concepts and applications of linear algebra with emphasis on Euclidean space. Significant goals of the course are that the student develop the ability to perform meaningful computations and to write accurate proofs. Topics include bases, subspaces, dimension, determinants, characteristic polynomials, eigenvalues, eigenvectors, and especially matrix representations of linear transformations and change of basis. Applications may be drawn from areas such as optimization, statistics, biology, physics, and signal processing.",
    },
    {
      title: 'Data Structures',
      description: "Motivated by problems that arise in a variety of disciplines, this course examines concepts and develops skills in solving computational problems. Topics covered include abstraction (how to hide details), modularity (how to decompose problems), data structures (how to efficiently organize data), and algorithms (procedures for solving problems). Laboratory assignments are implemented using object-oriented programming techniques.",
    },
    {
      title: 'Discrete Math',
      description: "This course develops the mathematical foundations of computer science that are not calculus-based. It covers basic set theory, logic, mathematical proof techniques, and a selection of discrete mathematics topics such as  combinatorics (counting),  discrete probability, number theory,and graph theory. The mathematics is frequently motivated using computer science applications.",
    },
    {
      title: 'Evolutionary Game Theory',
      description: "Pioneered by John Maynard Smith and others, evolutionary game theory has become an important approach to studying a wide range of biological and social problems, such as microbial interactions and animal behavior. In evolutionary game dynamics, the fitness of individuals depends on the relative abundance of all individual types in the population, and higher-fitness individual types tend to increase in abundance. This course introduces basic concepts in evolutionary game theory, including evolutionarily stable strategies, replicator dynamics, finite populations, and games on networks, along with applications to social evolution, particularly to understanding human cooperation.",
    },
    {
      title: 'Machine Learning and Statistical Data Analysis',
      description: "This course provides an introduction to statistical modeling and machine learning. Topics include learning theory, supervised and unsupervised machine learning, statistical inference and prediction, and data mining. Applications of these techniques to a wide variety of data sets will be described.",
    },
    {
      title: 'Accelerated Computational Linguistics',
      description: "The study of human language from a computational perspective. This accelerated course has programming background equivalent to that provided byCOSC 1as a prerequisite. This course will survey formal models for representing linguistic objects, and statistical approaches to learning from natural language data. We will pay attention to the use of computational techniques to understand the structure of language, as well as practical engineering applications like speech recognition and machine translation. Students will implement simple algorithms for several key tasks in language processing and learning.",
    },
    {
      title: 'Probability',
      description: "Our capacity to fathom the world around us hinges on our ability to understand quantities which are inherently unpredictable. Therefore, in order to gain more accurate mathematical models of the natural world we must incorporate probability into the mix. This course will serve as an introductions to the foundations of probability theory. Topics covered will include some of the following: (discrete and continuous)random variable, random vectors, multivariate distributions, expectations; independence, conditioning, conditional distributions and expectations; strong law of large numbers and the central limit theorem; random walks and Markov chains. ",
    },
    {
      title: 'Artificial Intelligence',
      description: 'An introduction to the field of Artificial Intelligence. Topics include games, robotics, motion planning, knowledge representation, logic and theorem proving, probabilistic reasoning over time, understanding of natural languages, and discussions of human intelligence.',
    },
    {
      title: 'Linear Models',
      description: 'This course provides an introduction to the most common model used in statistical data analysis. Simple linear regression, multiple regression, and analysis of variance are cov­ered, as well as statistical model-building strategies. Regression diagnostics, analysis of complex data sets and scientific writing skills are emphasized. Methods are illustrated with data sets drawn from the health, biological, and social sciences. Computations require the use of a statistical software package such as STATA.',
    },
  ];
  

const Coursework = () => {
  return (
    <StyledContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Relevant Coursework
      </Typography>
      {courses.map((course, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom>
            {course.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {course.description}
          </Typography>
        </div>
      ))}
    </StyledContainer>
  );
};

export default Coursework;
