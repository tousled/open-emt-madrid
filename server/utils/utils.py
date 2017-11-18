class Utils(object):

    @staticmethod
    def convert_to_lines(lines):
        return ' | '.join(str(line) for line in lines)