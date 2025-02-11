import { formatComment } from '../src/format-comment';
import { FileAnalyzerResults } from '../src/types';

const analyzedComments: FileAnalyzerResults = [
  {
    comments: {
      'FIXME:': [
        {
          comment: ':add implementation',
          line: 10
        }
      ],
      NOTE: [
        { comment: "Please don't forget review", line: 11 },
        { comment: 'another note', line: 20 }
      ],
      'tODo:': [{ comment: 'this should present', line: 13 }],
      missingBody: [{ comment: '', line: 1 }]
    },
    file: 'tests/mockFiles/mockFile0.js',
    blob_url: 'https://githubHost/owner/repo/blob/sha/mockFile0.js'
  },
  {
    comments: {
      'FIXME:': [{ comment: ':add implementation', line: 20 }],
      NOTE: [
        { comment: "Please don't forget review", line: 21 },
        { comment: 'another note', line: 2 }
      ],
      'tODo:': [{ comment: 'this should present', line: 5 }]
    },
    file: 'tests/mockFiles/mockFile2.js',
    blob_url: 'https://githubHost/owner/repo/blob/sha/mockFile2.js'
  }
];

describe('FormatComment', () => {
  it('should format comment consistently', () => {
    const comment = formatComment(analyzedComments, {
      title: 'mock title'
    });

    expect(comment).toMatchSnapshot();
  });

  it('should tag actor with reviewMsg', () => {
    const comment = formatComment(analyzedComments, {
      title: 'mock title',
      actor: 'mock-actor',
      reviewMsg: 'please review'
    });

    expect(comment).toMatchSnapshot();
  });
});
