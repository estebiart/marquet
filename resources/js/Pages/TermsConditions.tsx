import React from 'react';
import { PageProps } from '@/types';
import Layout from '@/context/Layout';

interface Props extends PageProps {
  content: string;
}

const TermsConditions: React.FC<Props> = ({ content }) => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  );
};

export default TermsConditions;
