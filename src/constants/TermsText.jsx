import React from 'react';

const TermsText = () => {
    return (
        <>
            <p>
                NOT MEDICAL ADVICE: This tool is designed to help climbers assess potential finger injuries and is intended for informational purposes only. It is not a substitute for professional medical advice and is not intended for minors.
            </p>

            <p>
                SEVERE FINGER INJURIES: If you have experienced a dislocation, cannot move your finger or make a fist, suspect a fracture, have lost sensation, or suffered other significant trauma, seek professional medical attention immediately. If you have a condition that could be aggravated by this assessment, do not proceed.
            </p>

            <p>
                AGE REQUIREMENT: This tool is strictly for individuals aged 18 and over. If you are under 18, you must not engage with this tool and must discontinue use.
            </p>

            <p>
                NOT FOR ALL INJURIES: This tool is not designed to handle the following non-exhaustive list of injuries: Mallet finger (avulsion of extensor tendon), boutonniere deformity (disruption of central slip), sagittal band injury (MCP “boxer’s knuckle”), trigger finger (stenosing tenosynovitis), Dupuytren's contraction, jersey finger (FDP avulsion rupture), extensor tendinopathies (e.g. EDC tendinopathy), thumb injuries (e.g. thumb UCL injury / gamekeeper’s thumb / skier’s thumb), early osteoarthritis.
            </p>

            <p>
                INJURIES THAT ARE INCLUDED IN THIS TOOL: Pulley injuries, flexor tenosynovitis, flexor digitorum profundus (FDP) injuries, lumbrical injuries, joint capsulitis, collateral ligament injuries, some nerve-related issues, some cyst-related issues, injury-induced pulley thickening, volar plate injuries, flexor digitorum superficialis (FDS) insertional tendinopathy, FDP insertional tendinopathy, lateral band syndrome.
            </p>

            <p>
                ACKNOWLEDGEMENT: By proceeding, you confirm that you have read, understood, and agree to the terms above. If you do not agree or cannot comply, you must not continue.
            </p>

            <p>
                TERMS AND CONDITIONS: By clicking 'Start,' you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside">
                <li>This tool is intended for informational purposes only and does not replace professional medical advice, diagnosis, or treatment.</li>
                <li>You must be 18 years or older to use this tool. If you are under 18, do not proceed.</li>
                <li>Severe injuries (e.g., dislocations, suspected fractures, or complete sensation loss) require immediate medical attention. Do not use this tool if you have such injuries or any condition that could be aggravated by this assessment.</li>
                <li>You are responsible for ensuring you are physically fit to complete the assessment. If you experience discomfort or are uncertain about your condition, stop immediately and consult a healthcare provider.</li>
            </ul>
            <p>
                By proceeding, you confirm that you have read, understood, and agree to these terms. For full details, please review our Terms and Conditions, available here: {' '}
                <a href="http://hoopersbeta.com/termsandconditions" target="_blank" rel="noopener noreferrer" className="underline text-blue-500">hoopersbeta.com/termsandconditions</a>
            </p>

        </>
    );
};

export default TermsText; 